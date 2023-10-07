import Base from "./base";
import './css/projects.scss';

const projectList = [
  {
    id: 0,
    title: "Rust Image Editor",
    content: "Web app made in Rust + Yew",
    link: "https://github.com/pugsedo/rust-img-editor"
  },
];

function ProjectSection({ title, content, link }) {
  return (
    <a href={link} className="projectSection">
      <h1>{ title }</h1>
      <p>{ content }</p>
    </a>
  )
}

function Projects() {
  return (
    <Base>
      <div className="projects">
        {projectList.map((project) => (
          <ProjectSection
            key={project.id}
            title={project.title}
            content={project.content}
            link={project.link}
          />
        ))}
      </div>
    </Base>
  );
}

export default Projects;
