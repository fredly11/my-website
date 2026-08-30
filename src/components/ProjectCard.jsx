export default function ProjectCard({ project, compact = false }) {
  return (
    <article className={compact ? "project-card is-compact" : "project-card"}>
      <div className="project-card-top">
        <h3>{project.name}</h3>
        {project.role ? <p className="project-role">{project.role}</p> : null}
      </div>
      {project.subtitle ? (
        <p className="project-subtitle">{project.subtitle}</p>
      ) : null}
      <p>{project.summary}</p>
      {project.stack?.length ? (
        <ul className="tag-list" aria-label="Technologies">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <div className="project-links">
        {project.live ? (
          <a
            className="text-link"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live site
          </a>
        ) : null}
        {project.repo ? (
          <a
            className="text-link"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo
          </a>
        ) : null}
      </div>
    </article>
  );
}
