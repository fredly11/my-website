import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { skillGroups } from "../content";

export default function Skills() {
  useDocumentTitle("Skills | William Buechele");

  return (
    <section className="page-block">
      <div className="page-intro">
        <h1>Skills</h1>
        <p className="lede">
          Honest groupings from support work, a junior DevOps role, and
          portfolio projects. I use these tools; I do not claim senior-level
          depth in every one.
        </p>
      </div>
      <div className="card-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="info-card">
            <h2>{group.title}</h2>
            <p>{group.summary}</p>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
