import ProjectCard from "../components/ProjectCard";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { projects, smallerProjects } from "../content";

export default function Portfolio() {
  useDocumentTitle("Portfolio | William Buechele");

  return (
    <section className="page-block">
      <div className="page-intro">
        <h1>Portfolio</h1>
        <p className="lede">
          Three projects I can walk through in an interview. Links go to the
          live product or the public repo — nothing invented.
        </p>
      </div>
      <div className="stack">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="smaller-work">
        <h2>Smaller repos</h2>
        <ul className="smaller-list">
          {smallerProjects.map((item) => (
            <li key={item.name}>
              <a href={item.repo} target="_blank" rel="noreferrer">
                {item.name}
              </a>
              <span> — {item.summary}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
