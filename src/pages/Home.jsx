import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  certifications,
  education,
  profile,
  projects,
} from "../content";

export default function Home() {
  useDocumentTitle("William Buechele | Technical Support Engineer");

  return (
    <>
      <section className="hero page-block">
        <p className="eyebrow">
          {profile.location} · {profile.citizenship}
        </p>
        <h1>{profile.name}</h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="lede">{profile.pitch}</p>
        <div className="cta-row">
          <Link className="btn" to="/contact">
            Contact me
          </Link>
          <a
            className="btn btn-ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            className="btn btn-ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </section>

      <section className="page-block">
        <div className="section-heading">
          <h2>Selected work</h2>
          <Link className="text-link" to="/portfolio">
            All projects
          </Link>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>

      <section className="page-block">
        <div className="section-heading">
          <h2>Certifications & education</h2>
          <Link className="text-link" to="/certifications">
            Experience and certs
          </Link>
        </div>
        <ul className="cert-strip">
          {certifications.map((cert) => (
            <li key={cert.name} className="info-card">
              <p className="info-kicker">{cert.status}</p>
              <h3>{cert.name}</h3>
              <p>{cert.earned ?? "Not earned yet"}</p>
            </li>
          ))}
          <li className="info-card">
            <p className="info-kicker">Education</p>
            <h3>{education.program}</h3>
            <p>
              {education.school} · {education.status}
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
