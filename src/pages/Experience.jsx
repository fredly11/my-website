import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  certifications,
  education,
  experience,
  languages,
} from "../content";

export default function Experience() {
  useDocumentTitle("Certifications & Experience | William Buechele");

  return (
    <section className="page-block">
      <div className="page-intro">
        <h1>Certifications & experience</h1>
        <p className="lede">
          Support and junior DevOps roles, plus the credentials I have earned
          so far. Solutions Architect Associate is in progress, not complete.
        </p>
      </div>

      <h2 className="block-title">Experience</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.dates}`} className="info-card">
            <p className="info-kicker">
              {job.location ? `${job.dates} · ${job.location}` : job.dates}
            </p>
            <h3>
              {job.title} · {job.company}
            </h3>
            <ul className="bullet-list">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h2 className="block-title">Certifications</h2>
      <div className="card-grid">
        {certifications.map((cert) => (
          <article key={cert.name} className="info-card">
            <p className="info-kicker">{cert.status}</p>
            <h3>{cert.name}</h3>
            <p>{cert.earned ?? "In progress — not earned"}</p>
            <p>{cert.detail}</p>
          </article>
        ))}
      </div>

      <h2 className="block-title">Education</h2>
      <article className="info-card">
        <p className="info-kicker">{education.status}</p>
        <h3>
          {education.program}, {education.school}
        </h3>
        <p>{education.note}</p>
      </article>

      <h2 className="block-title">Languages</h2>
      <ul className="tag-list">
        {languages.map((lang) => (
          <li key={lang.name}>
            {lang.name} · {lang.level}
          </li>
        ))}
      </ul>
    </section>
  );
}
