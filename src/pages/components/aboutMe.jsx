import FadeInSection from './fadeIn';
import '../css/aboutme.scss';

export default function AboutMePage() {
  return (
    <FadeInSection>
      <header className="aboutme">
        <h2>Let me introduce myself...</h2>

        <p>
          &emsp;I'm a passionate full-stack developer with expertise in <b>HTML, CSS, JavaScript, TypeScript,</b> and popular frameworks like <b>React.js</b> and <b>Node.js</b>.
          My skills extend to <b>Django</b> and <b>PostgreSQL</b> for backend development.
          I'm very experienced using <b>Python</b>, as I have been using it for years.
        </p>

        <div className="skills">
          <div><img src='./images/logos/html_logo.png' alt="HTML Logo"></img></div>
          <div><img src='./images/logos/css_logo.png' alt="CSS Logo"></img></div>
          <div><img className='extrasmall' src='./images/logos/javascript_logo.png' alt="JS Logo"></img></div>
          <div><img className='extrasmall' src='./images/logos/typescript_logo.png' alt="TS Logo"></img></div>
          <div><img src='./images/logos/nodejs_logo.png' alt="Node.JS Logo"></img></div>
          <div><img src='./images/logos/react_logo.png' alt="React.JS Logo"></img></div>
        </div>
      </header>
    </FadeInSection>
  );
}